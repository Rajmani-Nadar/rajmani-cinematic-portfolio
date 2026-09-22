import { createClient } from '@supabase/supabase-js';

const PLACEHOLDER_TOKENS = ['placeholder', 'replace_with', 'your_project', 'your-', 'example', 'changeme'];

const toStringValue = (value = '') => String(value ?? '').trim();

export function isDevelopmentMode() {
  return process.env.NODE_ENV === 'development';
}

export function isSupabaseConfigured() {
  const supabaseUrl = toStringValue(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseServiceKey = toStringValue(process.env.SUPABASE_SERVICE_ROLE_KEY);

  const hasRealValue = (value) => Boolean(value) && !PLACEHOLDER_TOKENS.some((token) => value.toLowerCase().includes(token));

  return hasRealValue(supabaseUrl) && hasRealValue(supabaseServiceKey);
}

const createMockResult = (data = [], extra = {}) => ({
  data,
  error: null,
  count: Array.isArray(data) ? data.length : data ? 1 : 0,
  ...extra,
});

const createMockQuery = (initialData = []) => {
  const data = Array.isArray(initialData) ? initialData : [initialData];
  const result = createMockResult(data);

  const query = {
    ...result,
    then: (resolve, reject) => Promise.resolve(result).then(resolve, reject),
    catch: (handler) => Promise.resolve(result).catch(handler),
    finally: (handler) => Promise.resolve(result).finally(handler),
    select: () => createMockQuery(data),
    eq: () => createMockQuery(data),
    neq: () => createMockQuery(data),
    gt: () => createMockQuery(data),
    gte: () => createMockQuery(data),
    lt: () => createMockQuery(data),
    lte: () => createMockQuery(data),
    in: () => createMockQuery(data),
    order: () => createMockQuery(data),
    limit: () => createMockQuery(data),
    maybeSingle: () => Promise.resolve(createMockResult(data[0] ?? null)),
    single: () => Promise.resolve(createMockResult(data[0] ?? null)),
    insert: (rows = []) => createMockQuery(Array.isArray(rows) ? rows : [rows]),
    update: (changes = {}) => createMockQuery(data.map((item) => ({ ...(item || {}), ...(changes || {}) }))),
    upsert: (rows = []) => createMockQuery(Array.isArray(rows) ? rows : [rows]),
    delete: () => createMockQuery([]),
    head: () => createMockQuery([]),
  };

  return query;
};

export function createSupabaseClient() {
  const supabaseUrl = toStringValue(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseServiceKey = toStringValue(process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (isDevelopmentMode() || !isSupabaseConfigured()) {
    return createMockSupabaseClient();
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

export function createMockSupabaseClient() {
  return {
    from: () => ({
      ...createMockQuery([]),
      select: () => createMockQuery([]),
      insert: (rows = []) => createMockQuery(Array.isArray(rows) ? rows : [rows]),
      update: (changes = {}) => createMockQuery([]).update(changes),
      upsert: (rows = []) => createMockQuery(Array.isArray(rows) ? rows : [rows]),
      delete: () => createMockQuery([]),
      eq: () => createMockQuery([]),
      gte: () => createMockQuery([]),
      lt: () => createMockQuery([]),
      order: () => createMockQuery([]),
      limit: () => createMockQuery([]),
      single: () => Promise.resolve(createMockResult(null)),
      maybeSingle: () => Promise.resolve(createMockResult(null)),
    }),
    storage: {
      listBuckets: async () => ({ data: [], error: null }),
      from: () => ({
        upload: async () => ({ data: null, error: null }),
        remove: async () => ({ data: [], error: null }),
        list: async () => ({ data: [], error: null }),
      }),
    },
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
    },
  };
}

export const supabase = createSupabaseClient();
