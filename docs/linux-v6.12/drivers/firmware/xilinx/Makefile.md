---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/firmware/xilinx/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
# Makefile for Xilinx firmwares

obj-$(CONFIG_ZYNQMP_FIRMWARE) += zynqmp.o
obj-$(CONFIG_ZYNQMP_FIRMWARE_DEBUG) += zynqmp-debug.o

```
