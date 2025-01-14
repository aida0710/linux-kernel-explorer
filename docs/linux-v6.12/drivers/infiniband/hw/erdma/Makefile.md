---
sidebar_position: 13
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/erdma/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
obj-$(CONFIG_INFINIBAND_ERDMA) := erdma.o

erdma-y := erdma_cm.o erdma_main.o erdma_cmdq.o erdma_cq.o erdma_verbs.o erdma_qp.o erdma_eq.o

```
