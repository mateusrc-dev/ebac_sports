import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.favoritos.find((f) => f.id === favorito.id)) {
        const favoritosSemProduto = state.favoritos.filter(
          (f) => f.id !== favorito.id
        )
        state.favoritos = favoritosSemProduto
      } else {
        state.favoritos = [...state.favoritos, favorito]
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
