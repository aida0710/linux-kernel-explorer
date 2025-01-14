---
sidebar_position: 4
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/sound/aoa/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_SND_AOA) += core/
obj-$(CONFIG_SND_AOA_SOUNDBUS) += soundbus/
obj-$(CONFIG_SND_AOA) += fabrics/
obj-$(CONFIG_SND_AOA) += codecs/

```
