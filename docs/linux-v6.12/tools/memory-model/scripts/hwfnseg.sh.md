---
sidebar_position: 7
---
# hwfnseg.sh

### ファイル情報

- パス: `linux-v6.12/tools/memory-model/scripts/hwfnseg.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0+
#
# Generate the hardware extension to the litmus-test filename, or the
# empty string if this is an LKMM run.  The extension is placed in
# the shell variable hwfnseg.
#
# Usage:
#	. hwfnseg.sh
#
# Copyright IBM Corporation, 2019
#
# Author: Paul E. McKenney <paulmck@linux.ibm.com>

if test -z "$LKMM_HW_MAP_FILE"
then
	hwfnseg=
else
	hwfnseg=".$LKMM_HW_MAP_FILE"
fi

```
