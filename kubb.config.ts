import { defineConfig } from "@kubb/core";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginTs } from "@kubb/swagger-ts";
import { pluginClient } from "@kubb/swagger-client";

export default defineConfig(() => {
    return [
        {
            hooks: {
                done: ["npx prettier --write ./openapi"],
            },
            root: ".",
            input: {
                path: "./openapi.json",
            },
            output: {
                clean: false,
                path: "./openapi",
            },
            plugins: [
                pluginOas({ output: false }),
                pluginTs({
                    output: {
                        path: "./types",
                        exportAs: "types",
                    },
                    group: {
                        type: "tag",
                        output: "./types/{{tag}}",
                    },
                    enumType: "enum",
                    enumSuffix: "Enum",
                    unknownType: "unknown",
                }),
                pluginClient({
                    group: {
                        type: "tag",
                        output: "./requests/{{tag}}",
                    },
                    client: {
                        importPath: "../../../client",
                    },
                    output: {
                        path: "./requests",
                        exportAs: "requests",
                    },
                }),
            ],
        },
    ];
});
