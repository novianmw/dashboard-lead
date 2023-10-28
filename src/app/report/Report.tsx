import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"

export default function Report() {
    return (
        <section className="w-full">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead>Detail</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Label</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">2023/10/5</TableCell>
                        <TableCell>PT Berlayar Jaya</TableCell>
                        <TableCell>Transfer</TableCell>
                        <TableCell>Income</TableCell>
                        <TableCell className="text-right">IDR 10,000,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">2023/10/5</TableCell>
                        <TableCell>PT Jaya Jaya</TableCell>
                        <TableCell>Transfer</TableCell>
                        <TableCell>Income</TableCell>
                        <TableCell className="text-right">IDR 5,000,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">2023/10/1</TableCell>
                        <TableCell>PT Fintect Utang</TableCell>
                        <TableCell>Transfer</TableCell>
                        <TableCell>Outcome</TableCell>
                        <TableCell className="text-right">IDR 5,300,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">2023/9/28</TableCell>
                        <TableCell>QRis Payment</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell>Outcome</TableCell>
                        <TableCell className="text-right">IDR 100,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">2023/9/26</TableCell>
                        <TableCell>MANDIRI 1560005350133</TableCell>
                        <TableCell>Transfer</TableCell>
                        <TableCell>Outcome</TableCell>
                        <TableCell className="text-right">IDR 5,000,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">2023/9/25</TableCell>
                        <TableCell>Youtube</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell>Subscription</TableCell>
                        <TableCell className="text-right">IDR 49,000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">2023/9/23</TableCell>
                        <TableCell>Spotify</TableCell>
                        <TableCell>Payment</TableCell>
                        <TableCell>Subscription</TableCell>
                        <TableCell className="text-right">IDR 89,000</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}
