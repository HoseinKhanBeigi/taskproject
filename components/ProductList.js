import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DetailsIcon from "@mui/icons-material/Details";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";

export default function ProductList({ products }) {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const deleteItem = (id) => {
    console.log(id);
  };

  const filterByCat = [
    ...products
      .reduce((acc, el) => {
        const key = el.category;
        const item = acc.get(key) || Object.assign({}, el);
        return acc.set(key, item);
      }, new Map())
      .values(),
  ];

  const filterByCategory = (cat) => {
    return products.filter((item) => {
      return item.category === cat;
    });
  };

  const [category, setcategory] = React.useState(filterByCat[0].category);

  const handleChange = (event) => {
    setcategory(event.target.value);
  };

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={12} m={2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="category"
              onChange={handleChange}
            >
              {filterByCat.map((item, i) => {
                return (
                  <MenuItem m={0} key={i} value={item.category}>
                    {item.category}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={12} m={2}>
          <TableContainer
            sx={{
              maxWidth: "100%",
              overflowX: "auto",
            }}
          >
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">
                    id
                  </TableCell>
                  <TableCell align="right">image</TableCell>
                  <TableCell align="right">title</TableCell>
                  <TableCell align="right">category</TableCell>
                  <TableCell align="left">description</TableCell>
                  <TableCell align="right">detail</TableCell>
                  <TableCell align="right">action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterByCategory(category).map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.id}
                    </TableCell>

                    <TableCell align="right">
                      <Image
                        loader={myLoader}
                        src={row.image}
                        width={100}
                        height={100}
                      />
                    </TableCell>

                    <TableCell
                      align="right"
                      sx={{
                        fontSize: "12px",
                        width: "100px",
                        textAlign: "start",
                      }}
                    >
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        fontSize: "12px",
                        width: "100px",
                        textAlign: "start",
                      }}
                    >
                      {truncate(row.description, 60)}
                    </TableCell>
                    <TableCell align="right">
                      <Link href="products/[id]" as={`products/${row.id}`}>
                        <Tooltip title="Detail">
                          <IconButton>
                            <DetailsIcon />
                          </IconButton>
                        </Tooltip>
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Delete">
                        <IconButton onClick={() => deleteItem(row.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}
