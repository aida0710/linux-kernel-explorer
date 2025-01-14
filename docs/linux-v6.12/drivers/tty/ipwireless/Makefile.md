---
sidebar_position: 5
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/tty/ipwireless/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for the IPWireless driver
#

obj-$(CONFIG_IPWIRELESS) += ipwireless.o

ipwireless-y := hardware.o main.o network.o tty.o


```
