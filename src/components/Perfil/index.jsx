import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="Imagem de perfil do usuário" />
            <a className={styles.name} target='_blank' title={`Visitar perfil de ${nomeUsuario}`} href={`https://github.com/${nomeUsuario}`}>
                <h1 className='perfil-titulo'>
                    {nomeUsuario}
                </h1>
            </a>
        </header>
    )
}

export default Perfil;