import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import useAbrirCerrar from 'hooks/useAbrirCerrar'

export default function DetallesSubtema({ title, defBreve, arrayCodigo, url, video, language = "jsx" }) {
    const { open, abrirCerrar } = useAbrirCerrar()

    return (
        <div className="marco"><h4>{title}</h4>
            <div > {defBreve}</div>
            {arrayCodigo.length > 0 ? <a href onClick={() => abrirCerrar(0)} className="ejemplo"><h5>EJEMPLOS ó APUNTES: </h5></a> : null}
            {open[0] ?
                <div className="efecto__animacion__contenido">
                    <ul>
                        {arrayCodigo.map(e =>
                            <li key={arrayCodigo.indexOf(e) + e.text}>
                                <Highlight
                                    {...defaultProps}
                                    code={e.cod}
                                    language={language}
                                >
                                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className={className} style={style} id="highlighter">
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({ line, key: i })}>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({ token, key })} />
                                                ))}
                                            </div>
                                        ))}
                                    </pre>
                                    )}
                                </Highlight>
                            || {e.text}
                        </li>)}
                        {url ? <li>Para más información, visita este <a href={url} target="_blank" rel="noreferrer">link</a></li> : null}
                                {video ? <li><video src={video} controls width="250">desierto</video></li> : null}
                        </ul>
                    </div> : null}
            </div>
    )
}
