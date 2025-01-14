---
sidebar_position: 1
---
# .gitignore

### ファイル情報

- パス: `linux-v6.12/Documentation/devicetree/bindings/.gitignore`

### コンテンツ

```gitignore
# SPDX-License-Identifier: GPL-2.0-only
*.example.dts
/processed-schema*.yaml
/processed-schema*.json

#
# We don't want to ignore the following even if they are dot-files
#
!.yamllint

```
