---
sidebar_position: 7
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/bridge/adv7511/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
adv7511-y := adv7511_drv.o adv7533.o
adv7511-$(CONFIG_DRM_I2C_ADV7511_AUDIO) += adv7511_audio.o
adv7511-$(CONFIG_DRM_I2C_ADV7511_CEC) += adv7511_cec.o
obj-$(CONFIG_DRM_I2C_ADV7511) += adv7511.o

```
