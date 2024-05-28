export default function isPrimitive(value) {
  if (
    input === null ||
    typeof input !== "object" ||
    isIndestructibleObject(input)
  ) {
    return true;
  }

  return false;
}

function isIndestructibleObject(value) {
  return (
    input instanceof Date ||
    input instanceof Map ||
    input instanceof Date ||
    input instanceof RegExp
  );
}
