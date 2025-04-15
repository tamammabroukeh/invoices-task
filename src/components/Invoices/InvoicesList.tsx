import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { InvoicesColumns } from "@/data";
import { StyledTableCell } from "../shared/Table/StyledTableCell";
import { StyledTableRow } from "../shared/Table/StyledTableRow";
import { useInvoiceStore } from "@/app/invoices-store";
import { currencyFormatter, FormatDate } from "@/utils/functions";
import { Switch } from "@mui/material";
export default function InvoiceList() {
  const { invoices, toggleInvoiceStatus } = useInvoiceStore();
  // console.log(invoices);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {InvoicesColumns.map((InvoiceCol, idx) => (
              <StyledTableCell align="center" key={idx}>
                {InvoiceCol}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((Invoice) => (
            <StyledTableRow key={Invoice.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {Invoice.id}
              </StyledTableCell>
              <StyledTableCell align="center">{Invoice.client}</StyledTableCell>
              <StyledTableCell align="center">
                {FormatDate(Invoice.date)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {currencyFormatter(Invoice.amount)}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Switch
                  checked={Invoice.status === "Paid"}
                  onChange={() => {
                    toggleInvoiceStatus(Invoice.id);
                  }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
