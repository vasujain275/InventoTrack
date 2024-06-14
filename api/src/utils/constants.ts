const jwtSecretKey: string = process.env.JWT_SECRET as string;
const port: number = parseInt(process.env.PORT || "8069", 10);

export { jwtSecretKey, port };
