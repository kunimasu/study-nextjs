'use server'

// import { redirect } from 'next/navigation'

export const addTodo = async (todo :string) => {
    const ret = "Re:" + todo
    console.log(ret)
    return ret
    // redirect('/isr/1')
}
