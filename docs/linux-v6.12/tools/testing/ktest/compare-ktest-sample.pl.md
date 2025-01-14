---
sidebar_position: 1
---
# compare-ktest-sample.pl

### ファイル情報

- パス: `linux-v6.12/tools/testing/ktest/compare-ktest-sample.pl`

### コンテンツ

```pl
#!/usr/bin/env perl
# SPDX-License-Identifier: GPL-2.0

open (IN,"ktest.pl");
while (<IN>) {
    # hashes are now used
    if (/\$opt\{"?([A-Z].*?)(\[.*\])?"?\}/ ||
	/^\s*"?([A-Z].*?)"?\s*=>\s*/ ||
	/set_test_option\("(.*?)"/) {
	$opt{$1} = 1;
    }
}
close IN;

open (IN, "sample.conf");
while (<IN>) {
    if (/^\s*#?\s*([A-Z]\S*)\s*=/) {
	$samp{$1} = 1;
    }
}
close IN;

foreach $opt (keys %opt) {
    if (!defined($samp{$opt})) {
	print "opt = $opt\n";
    }
}

foreach $samp (keys %samp) {
    if (!defined($opt{$samp})) {
	print "samp = $samp\n";
    }
}

```
