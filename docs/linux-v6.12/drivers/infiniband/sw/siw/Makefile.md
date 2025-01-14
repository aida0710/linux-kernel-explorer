---
sidebar_position: 3
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/sw/siw/Makefile`

### コンテンツ

```txt
obj-$(CONFIG_RDMA_SIW) += siw.o

siw-y := \
	siw_cm.o \
	siw_cq.o \
	siw_main.o \
	siw_mem.o \
	siw_qp.o \
	siw_qp_tx.o \
	siw_qp_rx.o \
	siw_verbs.o

```
