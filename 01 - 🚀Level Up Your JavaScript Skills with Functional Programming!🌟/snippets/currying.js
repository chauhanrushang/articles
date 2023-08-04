// Currying 
const logger = (level) => (message) => (additionalInfo) => `${level} | ${message} | ${additionalInfo ?? ""}`;

const infoLogger = logger("Info")
const errorLogger = logger("error")
const criticalErrorLogger = errorLogger("system crashed")
console.log(infoLogger("Request processed")()); // Output: Info | Request processed | 
console.log(errorLogger("Server Error")("stack overflow")); // Output: error | Server Error | stack overflow
console.log(criticalErrorLogger("shutting down")); // Output: error | system crashed | shutting down

