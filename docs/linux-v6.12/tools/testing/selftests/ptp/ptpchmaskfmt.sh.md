---
sidebar_position: 4
---
# ptpchmaskfmt.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/ptp/ptpchmaskfmt.sh`

### コンテンツ

```sh
#!/bin/bash
# SPDX-License-Identifier: GPL-2.0

# Simple helper script to transform ptp debugfs timestamp event queue filtering
# masks from decimal values to hexadecimal values

# Only takes the debugfs mask file path as an argument
DEBUGFS_MASKFILE="${1}"

#shellcheck disable=SC2013,SC2086
for int in $(cat "$DEBUGFS_MASKFILE") ; do
    printf '0x%08X ' "$int"
done
echo

```
