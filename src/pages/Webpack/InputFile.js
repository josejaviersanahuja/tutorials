import React from "react";
import "App.css";
import DetallesSubtema from "components/DetallesSubtema";

export default function InputFile() {
  const detalles = {
    primero: {
      title: "Punto de Entrada de la aplicación.",
      defBreve:
        "Trabajar con modulos hace que el trabajo del programador se lea y se entienda mejor. Sabrás a esta altura que el 80% del tiempo estaremos leyendo código, y si el código es largo, se complica la lectura. Mejor trabajar con módulos. Webpack, va a hacer el trabajo de entender los módulos. Lo único que necesita para comenzar es saber el punto de entrada de nuestra App y empezará a jalar del hilo.",
      arrayCodigo: [
        {
          cod: `//development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./common");
                
module.exports = merge(commonConfig, {
    mode: "development",
    entry: [
        "react-hot-loader/patch", // activate HMR for React
        "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
        "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
        "./index.tsx", // the entry point of our app
    ],
    devServer: {
        hot: true, // enable HMR on the server
        historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url 
    },
    devtool: "cheap-module-source-map",
        plugins: [
            new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        ],
});
                    `,
          text: "En la línea 7, Se aprecia todas las entradas de este proyecto en modo desarrollo.",
        },
        {
          cod: `// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const commonConfig = require("./common");
          
module.exports = merge(commonConfig, {
    mode: "production",
    entry: "./index.tsx",
    output: {
        filename: "js/bundle.[contenthash].min.js",
        path: resolve(__dirname, "../../dist"),
        publicPath: "/",
    },
    devtool: "source-map",
    plugins: [],
});`,
          text: "Aunque hay muchas más información, concentremos la idea de este capítulo en la línea 8. Simple y sencillo ./index.tsx Esto habilitará que todo punto de entrada de cualquier módulo o App sea un archivo que tenga ese nombre.",
        }
      ],
    },
  };

  return (
    <div className="cuerpo">
      <DetallesSubtema
        title={detalles.primero.title}
        defBreve={detalles.primero.defBreve}
        arrayCodigo={detalles.primero.arrayCodigo}
      />
    </div>
  );
}
