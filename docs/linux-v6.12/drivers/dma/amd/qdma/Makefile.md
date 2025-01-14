---
sidebar_position: 1
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/dma/amd/qdma/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

obj-$(CONFIG_AMD_QDMA)			+= amd-qdma.o

amd-qdma-$(CONFIG_AMD_QDMA)		:= qdma.o qdma-comm-regs.o

```
