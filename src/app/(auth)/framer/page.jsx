'use client'

function FramerPage() {
    return (
        <div
            style={{
                display: 'flex',
                width: '100vw',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <iframe width="80%" height="80%" frameboder='0' src='http://emprendo.ambato.gob.ec/' allowFullScreen></iframe>
            <button onClick={() => console.log('estoy dentro del iframe')}/>
        </div>
    )
}

export default FramerPage

