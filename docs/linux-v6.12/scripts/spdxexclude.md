---
sidebar_position: 141
---
# spdxexclude

### ファイル情報

- パス: `linux-v6.12/scripts/spdxexclude`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0
#
# Patterns for excluding files and directories

# Ignore the license directory and the licensing documentation which would
# create lots of noise for no value
LICENSES/
license-rules.rst

# Ignore config files and snippets. The majority is generated
# by the Kconfig tools
kernel/configs/
arch/*/configs/

# Other files without copyrightable content
/CREDITS
/MAINTAINERS
/README

```
