---
sidebar_position: 3
---
# run.sh

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/futex/run.sh`

### コンテンツ

```sh
#!/bin/sh
# SPDX-License-Identifier: GPL-2.0-or-later

###############################################################################
#
#   Copyright © International Business Machines  Corp., 2009
#
# DESCRIPTION
#      Run all tests under the functional, performance, and stress directories.
#      Format and summarize the results.
#
# AUTHOR
#      Darren Hart <dvhart@linux.intel.com>
#
# HISTORY
#      2009-Nov-9: Initial version by Darren Hart <dvhart@linux.intel.com>
#
###############################################################################

# Test for a color capable shell and pass the result to the subdir scripts
USE_COLOR=0
tput setf 7 || tput setaf 7
if [ $? -eq 0 ]; then
    USE_COLOR=1
    tput sgr0
fi
export USE_COLOR

(cd functional; ./run.sh)

```
