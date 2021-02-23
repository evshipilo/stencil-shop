/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppCard {
        "body": string;
        "postId": number;
        "title": string;
        "userName": string;
    }
    interface AppCardList {
    }
    interface AppHome {
    }
    interface AppNoFound {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AppViewPost {
        "history": RouterHistory;
        "match": MatchResults;
    }
}
declare global {
    interface HTMLAppCardElement extends Components.AppCard, HTMLStencilElement {
    }
    var HTMLAppCardElement: {
        prototype: HTMLAppCardElement;
        new (): HTMLAppCardElement;
    };
    interface HTMLAppCardListElement extends Components.AppCardList, HTMLStencilElement {
    }
    var HTMLAppCardListElement: {
        prototype: HTMLAppCardListElement;
        new (): HTMLAppCardListElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppNoFoundElement extends Components.AppNoFound, HTMLStencilElement {
    }
    var HTMLAppNoFoundElement: {
        prototype: HTMLAppNoFoundElement;
        new (): HTMLAppNoFoundElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppViewPostElement extends Components.AppViewPost, HTMLStencilElement {
    }
    var HTMLAppViewPostElement: {
        prototype: HTMLAppViewPostElement;
        new (): HTMLAppViewPostElement;
    };
    interface HTMLElementTagNameMap {
        "app-card": HTMLAppCardElement;
        "app-card-list": HTMLAppCardListElement;
        "app-home": HTMLAppHomeElement;
        "app-no-found": HTMLAppNoFoundElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "app-view-post": HTMLAppViewPostElement;
    }
}
declare namespace LocalJSX {
    interface AppCard {
        "body"?: string;
        "postId"?: number;
        "title"?: string;
        "userName"?: string;
    }
    interface AppCardList {
    }
    interface AppHome {
    }
    interface AppNoFound {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AppViewPost {
        "history"?: RouterHistory;
        "match"?: MatchResults;
    }
    interface IntrinsicElements {
        "app-card": AppCard;
        "app-card-list": AppCardList;
        "app-home": AppHome;
        "app-no-found": AppNoFound;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "app-view-post": AppViewPost;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-card": LocalJSX.AppCard & JSXBase.HTMLAttributes<HTMLAppCardElement>;
            "app-card-list": LocalJSX.AppCardList & JSXBase.HTMLAttributes<HTMLAppCardListElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-no-found": LocalJSX.AppNoFound & JSXBase.HTMLAttributes<HTMLAppNoFoundElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-view-post": LocalJSX.AppViewPost & JSXBase.HTMLAttributes<HTMLAppViewPostElement>;
        }
    }
}
