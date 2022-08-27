{
	"title": "Get Started — pytest documentation",
	"url": "https://docs.pytest.org/en/7.1.x/getting-started.html#getstarted",
	"author": "",
	"publisher": "",
	"isMedia": false,
	"postDate": "",
	"codeSnippetsArray": [],
	prerequisites: ["pytest requires: Python 3.7+ or PyPy3.", "pip - earliest version compatible with python 3.7.0"],
	installation: ["pip install -U pytest"],
	term: [],

}


# Get Started — pytest documentation


### Install pytest

1. run the following command in your command line:

```sh
pip install -U pytest
```

2. Check that you installed the correct version:

```shell
pytest --version
```

### Create your first test

Create a file called test_sample.py, containing a function, and a test:


```python
# content of test_sample.py

def func(x):
	return x + 1

def test_answer():
	assert func(3) == 5
```

The test

```
$ pytest
=========================== test session starts ============================
platform linux -- Python 3.x.y, pytest-7.x.y, pluggy-1.x.y
rootdir: /home/sweet/project
collected 1 item

test_sample.py F                                                     [100%]

================================= FAILURES =================================
_______________________________ test_answer ________________________________

    def test_answer():
>       assert func(3) == 5
E       assert 4 == 5
E        +  where 4 = func(3)

test_sample.py:6: AssertionError
========================= short test summary info ==========================
FAILED test_sample.py::test_answer - assert 4 == 5
============================ 1 failed in 0.12s =============================
```

The [100%] refers to the overall progress of running all test cases. After it finishes, pytest then shows a failure report because func(3) does not return 5.


#### Note:

You can use the assert statement to verify test expectations. pytest's Advanced assertion introspection will inteligently report intermediate values of the assert expression so you can avoid the many names of JUnit legacy methods.


### Run multiple tests

pytest will run all files of the form test _*.py or *_test.py in the current directory and its subdirectories. More generally, it follows standard test discovery rules.




### Assert that a certain expcetion is raised

Use the raises helper to assert that some code raises an exception

```python
# content of test_sysexit.py
import pytest

def f():
	raise SystemeExit(1)

```


Execute the test function with "quiet" reporting mode:

```python
pytest -q test_systemexit.py
```


### Note:
The -q/--quiet flag keeps the output brief in this and following examples


### Grouping multiple tests in a class

Once you develop multiple tests, you may want to group them into a class. pytest makes it easy to create a class containing more than one test:

```python
# content of test test_class.py
class TestClass:
	def test_one(self):
		x = "this"
		assert "h" in x


	def test_two(self):
		x = "hello"
		assert hasattr(x, "check")
```


```
$ pytest -q test_class.py
.F                                                                   [100%]
================================= FAILURES =================================
____________________________ TestClass.test_two ____________________________

self = <test_class.TestClass object at 0xdeadbeef0001>

    def test_two(self):
        x = "hello"
>       assert hasattr(x, "check")
E       AssertionError: assert False
E        +  where False = hasattr('hello', 'check')

test_class.py:8: AssertionError
========================= short test summary info ==========================
FAILED test_class.py::TestClass::test_two - AssertionError: assert False
1 failed, 1 passed in 0.12s
```

This first test passed and the second failed. You can easily see the intermediate values in the assertion to help you understand the reason for the failure.

Grouping tests in classes can be beneficial for the following reasons:

 - Test organization
 - Sharing fixtures for tests on in that particular class
 - Applying marks at the class level and having them implicitly apply to all tests


 Something to be aware of when grouping tests inside classes is that each test has a unique instance of the class. Having each test share the same class instance would be very detrimental to test isolation and would promote poor test practices. This is outlined below:

 ```python
# content of test_class_demo.py
class TestClassDemoInstance:
	value = 0

	def test_one(self):
		self.value = 1
		assert self.value == 1

	def test_two(self):
		assert self.value = 1
 ```

 ```
 $ pytest -k TestClassDemoInstance -q
.F                                                                   [100%]
================================= FAILURES =================================
______________________ TestClassDemoInstance.test_two ______________________

self = <test_class_demo.TestClassDemoInstance object at 0xdeadbeef0002>

    def test_two(self):
>       assert self.value == 1
E       assert 0 == 1
E        +  where 0 = <test_class_demo.TestClassDemoInstance object at 0xdeadbeef0002>.value

test_class_demo.py:9: AssertionError
========================= short test summary info ==========================
FAILED test_class_demo.py::TestClassDemoInstance::test_two - assert 0 == 1
1 failed, 1 passed in 0.12s
```

Note that attributes added at class level are class attributes, so they will be shared between tests.


### Request a unique temporary directory for functional tests
pytest provides Builtin fixtures / function arguments to request arbitrary resources, like a unique temporary dictionary.

```python
# content of test_tmp_path.py
def test_needsfiles(tmp_path):
	print(tmp_path)
	assert 0

```

List the name tmp_path in the test function signature and pytest will lookup and call a fixture factory to create the resource before performing the test function call. Before the test runs, pytest creates a unique-per-test-invocation temporary directory:

```

```
$ pytest -q test_tmp_path.py
F                                                                    [100%]
================================= FAILURES =================================
_____________________________ test_needsfiles ______________________________

tmp_path = PosixPath('PYTEST_TMPDIR/test_needsfiles0')

    def test_needsfiles(tmp_path):
        print(tmp_path)
>       assert 0
E       assert 0

test_tmp_path.py:3: AssertionError
--------------------------- Captured stdout call ---------------------------
PYTEST_TMPDIR/test_needsfiles0
========================= short test summary info ==========================
FAILED test_tmp_path.py::test_needsfiles - assert 0
1 failed in 0.12s
```

More info on temporary directory handling is available at https://docs.pytest.org/en/7.1.x/how-to/tmp_path.html#tmp-path-handling

Find out what kind of bultin pytest fixtures exist with the command:

```python
pytest --fixtures # show bultin and custom fixtures
```

Note that this command omits fixtures with leading _ unless the -v option is added.