---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `drivers/net/wireless/intel/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
obj-$(CONFIG_IPW2100) += ipw2x00/
obj-$(CONFIG_IPW2200) += ipw2x00/

obj-$(CONFIG_IWLEGACY)	+= iwlegacy/

obj-$(CONFIG_IWLWIFI)	+= iwlwifi/
obj-$(CONFIG_IWLMEI)	+= iwlwifi/

```
