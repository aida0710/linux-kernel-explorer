---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/ulp/iser/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_INFINIBAND_ISER)	+= ib_iser.o

ib_iser-y			:= iser_verbs.o iser_initiator.o iser_memory.o \
				   iscsi_iser.o

```
