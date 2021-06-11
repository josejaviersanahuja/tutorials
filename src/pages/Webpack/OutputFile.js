import React from "react";
import "App.css";
import DetallesSubtema from "components/DetallesSubtema";

export default function OutputFile() {
  const detalles = {
    primero: {
      title: "Punto de Salida de la App.",
      defBreve:
        "Una vez webpack jala todo el contenido de nuestra App, necesita empaquetarlo en un archivo comúnmente llamado bundle.js Por eso el nombre de Bundelizado. Ese archivo junto con el index.html que se genera asociado a ese archivo son los outputs principales.",
      arrayCodigo: [
        {
          cod: `// development config
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
          text: "En la línea 10, se aprecia en el comentario que webpack-dev-server hace el bundelizado por nosotros solo en el modo desarrollo. Quizás no sea lo ideal, pero me quedo con esta configuración.",
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
          text: "Enfoquemos nuestra atención en la línea 9 de la configuración. Decimos donde poner nuestro output, el publicpath que hará que entre por ahí nuestra app. El [contenthash] es lo que hace que se guarden en la memoria caché los datos del usuario. Esto crea entornos únicos para cada individuo, a pesar de ser una única App.",
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
