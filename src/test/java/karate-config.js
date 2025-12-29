function fn() {

  var env = karate.env || 'dev';
  karate.log('karate.env:', env);

  var baseUrl = java.lang.System.getenv('BASE_URL');
  var apiKey  = java.lang.System.getenv('API_KEY');

  if (!baseUrl || !apiKey) {
    throw 'Missing environment variables BASE_URL or API_KEY';
  }

  var config = {
    env: env,
    baseUrl: baseUrl,
    apiKey: apiKey
  };

  return config;
}
