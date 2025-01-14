---
sidebar_position: 1
---
# BUGS-parport

### ファイル情報

- パス: `linux-v6.12/drivers/parport/BUGS-parport`

### コンテンツ

```txt
Currently known (or at least suspected) bugs in parport:

o lp doesn't allow you to read status while printing is in progress (is
  this still true?).

o parport_pc_ecp_read_block_pio() is broken.  parport will revert to the
  software-driven mode in ieee1284_ops.c

See <URL:http://people.redhat.com/twaugh/parport/>.

```
