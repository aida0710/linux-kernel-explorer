---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/iio/cdc/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Makefile for industrial I/O capacitance to digital converter (CDC) drivers
#

obj-$(CONFIG_AD7150) += ad7150.o
obj-$(CONFIG_AD7746) += ad7746.o

```
