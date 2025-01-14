---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/char/xilinx_hwicap/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the Xilinx OPB hwicap driver
#

obj-$(CONFIG_XILINX_HWICAP) += xilinx_hwicap_m.o 
 
xilinx_hwicap_m-y := xilinx_hwicap.o fifo_icap.o buffer_icap.o

```
