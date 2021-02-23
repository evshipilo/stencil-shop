import {createStore} from "@stencil/store";
import {PostModel} from "../models/models";

type StoreData = {
  posts: PostModel[]
}

const {state, onChange} = createStore<StoreData>({
  posts: null
})

onChange('posts', v => {
  console.log(v)
})


export default state
