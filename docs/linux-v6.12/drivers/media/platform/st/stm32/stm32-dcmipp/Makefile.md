---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/media/platform/st/stm32/stm32-dcmipp/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
stm32-dcmipp-y := dcmipp-core.o dcmipp-common.o dcmipp-parallel.o dcmipp-byteproc.o dcmipp-bytecap.o

obj-$(CONFIG_VIDEO_STM32_DCMIPP) += stm32-dcmipp.o

```
