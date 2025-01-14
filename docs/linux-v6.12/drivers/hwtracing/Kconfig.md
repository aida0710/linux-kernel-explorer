---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/hwtracing/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
menu "HW tracing support"

source "drivers/hwtracing/stm/Kconfig"

source "drivers/hwtracing/intel_th/Kconfig"

source "drivers/hwtracing/ptt/Kconfig"

endmenu

```
