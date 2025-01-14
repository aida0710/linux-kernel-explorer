---
sidebar_position: 4
---
# net_dma

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/removed/net_dma`

### コンテンツ

```txt
What:		tcp_dma_copybreak sysctl
Date:		Removed in kernel v3.13
Contact:	Dan Williams <dan.j.williams@intel.com>
Description:
	Formerly the lower limit, in bytes, of the size of socket reads
	that will be offloaded to a DMA copy engine.  Removed due to
	coherency issues of the cpu potentially touching the buffers
	while dma is in flight.

```
