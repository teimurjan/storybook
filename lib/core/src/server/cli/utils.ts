export function parseList(str: string): string[] {
  return str.split(',');
}

export function getEnvConfig(program: Record<string, any>, configEnv: Record<string, any>): void {
  Object.keys(configEnv).forEach((fieldName) => {
    const envVarName = configEnv[fieldName];
    const envVarValue = process.env[envVarName];
    if (envVarValue) {
      program[fieldName] = envVarValue; // eslint-disable-line
    }
  });
}
