---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/video/fbdev/omap2/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
if OF && (ARCH_OMAP2PLUS || COMPILE_TEST)

source "drivers/video/fbdev/omap2/omapfb/Kconfig"

endif

```
