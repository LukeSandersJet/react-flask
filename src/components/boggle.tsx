import Tile from './tile'
import { ApiService, JSONValue } from '../hooks/apiService';
import { ReactComponentElement, useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';

const Boggle = () => {
    const [board, setBoard] = useState([]);
    const api: ApiService = new ApiService();

    useEffect(() => {
        const getBoard: any = async () => {
            const res: any = await api.getTiles();
            console.log('res from useEffect:', res)
            setBoard(board => {
                console.log('set board:',res)
                return res
            });
            console.log('board:', board)
        }
        getBoard()
    }, [])

    return (
        <section className='container'>
            <table>
            {board && board.map(
                (row: Array<string>) => 
                    <tr>{row.map((cell: string) => 
                        <td>{<Tile letter={cell} key={uuid()} />}</td>)}
                    </tr>)}
            </table>
        </section>
    )
}

export default Boggle;