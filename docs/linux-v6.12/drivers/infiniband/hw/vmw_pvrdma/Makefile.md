---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/vmw_pvrdma/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_INFINIBAND_VMWARE_PVRDMA) += vmw_pvrdma.o

vmw_pvrdma-y := pvrdma_cmd.o pvrdma_cq.o pvrdma_doorbell.o pvrdma_main.o pvrdma_misc.o pvrdma_mr.o pvrdma_qp.o pvrdma_srq.o pvrdma_verbs.o

```
