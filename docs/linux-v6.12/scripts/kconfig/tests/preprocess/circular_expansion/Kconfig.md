---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/scripts/kconfig/tests/preprocess/circular_expansion/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0

X = $(Y)
Y = $(X)
$(info $(X))

```
