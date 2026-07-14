export function greeting(name, language, shout) {
  const trimmed = typeof name === "string" ? name.trim() : "";
  let message;
  if (language === "es") {
    message = trimmed ? `Hola, ${trimmed}!` : "Hola, mundo!";
  } else {
    message = trimmed ? `Hello, ${trimmed}!` : "Hello, world!";
  }
  return shout ? message.toUpperCase() : message;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);
  const shout = args.includes("--shout");
  const positional = args.filter((a) => a !== "--shout");
  console.log(greeting(positional[0], positional[1], shout));
}
