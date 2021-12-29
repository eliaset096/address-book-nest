'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">address-book-nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' : 'data-target="#xs-controllers-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' :
                                            'id="xs-controllers-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' : 'data-target="#xs-injectables-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' :
                                        'id="xs-injectables-links-module-AppModule-c9ea36894b31cccccfddb262090538a41df658704c69b4d66d9740848a39fb6cd1c945ddebee26b65d85a71fbbbabd1bcb219ba4404d2a2ad5c58142ac54f19f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModule.html" data-type="entity-link" >ContactModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' : 'data-target="#xs-controllers-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' :
                                            'id="xs-controllers-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' }>
                                            <li class="link">
                                                <a href="controllers/ContactController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' : 'data-target="#xs-injectables-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' :
                                        'id="xs-injectables-links-module-ContactModule-ec7b85620d12f394a5816306bb2452b39f045768f8ac6d5edb6773a044e36e0208ebfdec77c1f79d5720fb21d49a95539ab6d1024f8e8b9bc40558072e357d61"' }>
                                        <li class="link">
                                            <a href="injectables/ContactService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ContactController.html" data-type="entity-link" >ContactController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateContactDTO.html" data-type="entity-link" >CreateContactDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Contact.html" data-type="entity-link" >Contact</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});