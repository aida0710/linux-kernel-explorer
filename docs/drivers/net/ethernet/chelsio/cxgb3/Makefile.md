---
sidebar_position: 14
---
# Makefile

### ファイル情報

- パス: `drivers/net/ethernet/chelsio/cxgb3/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Chelsio T3 driver
#

obj-$(CONFIG_CHELSIO_T3) += cxgb3.o

cxgb3-objs := cxgb3_main.o ael1002.o vsc8211.o t3_hw.o mc5.o \
	      xgmac.o sge.o l2t.o cxgb3_offload.o aq100x.o

```
