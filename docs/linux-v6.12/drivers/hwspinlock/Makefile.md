---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/hwspinlock/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Generic Hardware Spinlock framework
#

obj-$(CONFIG_HWSPINLOCK)		+= hwspinlock_core.o
obj-$(CONFIG_HWSPINLOCK_OMAP)		+= omap_hwspinlock.o
obj-$(CONFIG_HWSPINLOCK_QCOM)		+= qcom_hwspinlock.o
obj-$(CONFIG_HWSPINLOCK_SPRD)		+= sprd_hwspinlock.o
obj-$(CONFIG_HWSPINLOCK_STM32)		+= stm32_hwspinlock.o
obj-$(CONFIG_HWSPINLOCK_SUN6I)		+= sun6i_hwspinlock.o
obj-$(CONFIG_HSEM_U8500)		+= u8500_hsem.o

```
