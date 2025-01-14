---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/net/can/peak_canfd/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Makefile for the PEAK-System CAN-FD IP module drivers
#
obj-$(CONFIG_CAN_PEAK_PCIEFD) += peak_pciefd.o
peak_pciefd-y := peak_pciefd_main.o peak_canfd.o

```
