class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="navbar">
                <ul>
                    <li><a href="/index.html">home</a></li>
                    <li><a href="/blog.html">blog</a></li>
                    <li><a href="/simulations.html">simulations</a></li>
                    <li id="about"><a href="/bio.html">about</a></li>
                </ul>
            </nav>`
    }
}

customElements.define('nav-bar', NavBar)