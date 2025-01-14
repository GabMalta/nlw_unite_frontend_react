import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
 
export function AttendeeList(){
    return (

        <div className="flex flex-col gap-4">
            <div className="flex gap-3">
                <h1 className="font-bold text-2xl">Participantes</h1>
                
                <div className="flex items-center px-3 py-2 gap-3 rounded-lg border border-white/10 ">
                    < Search className="size-4 text-emerald-300"/>
                    <input className="bg-transparent text-sm w-72 flex-1 outline-none border-0 p-0"  type="text" placeholder="Buscar participante..."/>
                </div>

            </div>
            <div className="border border-white/10 rounded-lg">
                <table className="w-full">
                    <thead className="px-3 py-4">
                        <tr className="border-b border-white/10">
                            <th style={{width: 48}} className="py-3 px-4 text-sm font-semibold text-left">
                                <input className="bg-black/20 size-4 rounded border border-white/10" type="checkbox" name="" id="" />
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data da Inscrição</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data do Check-in</th>
                            <th style={{width: 64}} className="py-3 px-4 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>

                    <tbody>
                        {Array.from({length : 10}).map((_, i) => {
                            return (
                                        <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                            <td className="py-3 px-4 text-sm">
                                                <input className="bg-black/20 size-4 rounded border border-white/10" type="checkbox" name="" id="" />
                                            </td>
                                            <td className="py-3 px-4 text-sm text-zinc-300">1232132</td>
                                            <td className="py-3 px-4 text-sm text-zinc-300">
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-semibold text-white">Gabriel Malta</span>    
                                                    <span>gabriel.malta@yahoo.com.br</span>    
                                                </div>
                                            </td>
                                            <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
                                            <td className="py-3 px-4 text-sm text-zinc-300">2 dias atrás</td>
                                            <td className="py-3 px-4 text-sm text-zinc-300">
                                                <button className="p-1.5 border border-white/10 rounded-md bg-black/20">
                                                    <MoreHorizontal className="size-4"/>
                                                </button>
                                            </td>
                                        </tr>
                            )
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>Mostrando 10 de 228 itens</td>
                            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                                
                                <div className="inline-flex items-center gap-8">
                                
                                    <span>Pagina 1 de 23</span>

                                

                                    <div className="flex gap-1.5">
                                        <button className="p-1.5 border border-white/10 rounded-md bg-white/10">
                                            <ChevronsLeft className="size-4"/>
                                        </button>

                                        <button className="p-1.5 border border-white/10 rounded-md bg-white/10">
                                            <ChevronLeft className="size-4"/>
                                        </button>

                                        <button className="p-1.5 border border-white/10 rounded-md bg-white/10">
                                            <ChevronRight className="size-4"/>
                                        </button>

                                        <button className="p-1.5 border border-white/10 rounded-md bg-white/10">
                                            <ChevronsRight className="size-4"/>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            
            
        
        </div>
    )
}