Redux toolkit is an improvised version of redux that can be used to paired with react or any library .

here it is used as an alternative to context api, IN context api, every info is stored in a central store from where info canbe updated,retrieved or deleted.but there is no streamline path of doing so.

in redux, you can add data , retrive data in a single streamline path
moreover, in context api, we needed to spread the array elements(which mentioned in the context) so that no element is lost whereas in redux no need of spreading

redux makes use of a single store, reducers using which store will be accessed and two methods useDispatch() to add data and useSelector() to select data